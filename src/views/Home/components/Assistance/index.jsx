import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { GrNext as NextIcon } from "react-icons/gr";
//
import "./index.scss";

export default function Assistance({ lab_data }) {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState(null);
  const formNode = useRef(null);
  
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();
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

  useEffect(() => {
    if (data) {
      console.log("data: ", data);
    }
  
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  function onSubmit(formData) {
    if (steps === 1) {
      formNode.current.reset(); setSteps(0);
      console.log("Form submitted: ", formData);
    }

    const student = lookForStudent(formData.matricula);
    if (student) {
      setData({ ...data, ...student });
      setSteps(steps + 1);

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
              <button type="submit">
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
            <div className="button-wrapper">
              <button type="submit">
                CONFIRMAR
              </button>
            </div>
          </>
        )}
      </form>
      {/* {steps === 2 && (
        <div className="feedback-screen">
          <h3>
            ¡Gracias por confirmar tu asistencia <strong>{data.nombre.split(" ")[0]}</strong>!
          </h3>
        </div>
      )} */}
    </section>
  );
}
