import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//
import { updateName, updateIp } from "../../redux/slices/student";
import { getUserIpAddress, postUserData } from "../../APIs/user_data";
import lab_data from "../../data/lab.json";
import { Loader } from "../../utils";
import "./index.scss";

export default function Home() {
  const student_name = useSelector((state) => state.student_data.name);
  const formNode = useRef(null);
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState(null);
  const [promise, setPromise] = useState({
    resolved: false,
    rejected: false,
    pending: false
  });
  
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matricula = watch("matricula");

  function lookForStudent(matricula) {
    const student = lab_data.students.find(
      (student) => student.matricula === Number(matricula)
    );

    if (student)
      return student
    else
      return null
  }


  useEffect(() => {
    if (matricula) {
      setData({ ...data, matricula });
    }
    
    if (matricula?.length === 10) {
      lookForStudent(matricula);
    }

  }, [matricula]); // eslint-disable-line react-hooks/exhaustive-deps

  async function onSubmit(formData) {
    if (steps === 1) {
      formNode.current.reset();
      console.log("Form submitted: ", formData);
      
      try {
        setPromise({ ...promise, pending: true });
        const response = await getUserIpAddress();
        const ip = response.data.ip;
        dispatch(updateIp({ ip: ip }));
        formData.ip = ip;
        formData.name = student_name;

        try {
          const response_2 = await postUserData({ data: formData });
          console.log("User data posted:", response_2);
          setPromise({ ...promise, resolved: true });

        } catch (error) {
          setPromise({ ...promise, rejected: true });
          console.error('Error posting user data:', error);
        }

      } catch (error) {
        setPromise({ ...promise, rejected: true });
        console.error('Error fetching IP address:', error);

      } finally {
        setSteps(0);
        navigate("/feedback");
      }
    }

    const student = lookForStudent(formData.matricula);
    if (student) {
      setData({ ...data, ...student });
      setSteps(steps + 1);
      dispatch(updateName({ name: student.nombre }));

    } else {
      alert("No se encontró al estudiante");
    }
  }

  return (
    <section id="Assistance">
      <form
        ref={formNode}
        onSubmit={handleSubmit(onSubmit)}
        style={steps === 2 ? { display: "none" } : { display: "block" }}
      >
        {steps === 0 && (
          <>  
            <div className="input-wrapper">
              <label htmlFor="matricula">
                ¿Cuál es tu <strong>número de matrícula</strong>? *
              </label>
              <input
                placeholder="Escribe aquí tu respuesta..."  
                autoComplete="off"
                {...register("matricula", {
                  required: "El número de matrícula es requerido",
                  validate: (value) =>
                    /^[0-9]{10}$/.test(value) || "El número de matrícula debe tener 10 dígitos",
                })}
              />
              {errors.matricula && (
                <p className="error-message">{errors.matricula.message}</p>
              )}
            </div>
            <div className="button-wrapper">
              <button>
                SIGUIENTE
              </button>
            </div>
          </>
        )}
        {steps === 1 && (
          <>
            {data?.nombre && (
              <span>
                ¿Confirmas tu asistencia <br/> <strong>{data.nombre}</strong>? *
              </span>
            )}
            <div className="button-wrapper confirmation">
              <button onClick={() => setSteps(steps - 1)} className="secondary">
                EDITAR
              </button>
              <button type="submit">
                {promise.pending && <Loader />}
                {promise.rejected && "ERROR"}
                {!promise.pending && !promise.resolved && !promise.rejected && "CONFIRMAR"}
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
}
