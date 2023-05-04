//
import "./index.scss";

export function Loader({ width, height }) {  
  let style = {
    width: width || 20,
    height: height || 20
  };

  return (
    <div className="circle-loader" style={style} />
  );
};