import classes from "./picture-circle-svg.module.css";
export default function PictureCircleSvg() {
  return (
    <>
      <div className={classes["pulsating-circle"]}>
        <img
          className={classes["pic"]}
          src={`196833761_3554579494643240_4371667321083805765_n.jpg`}
          alt='Pulsing Image'
        />
      </div>
    </>
  );
}
