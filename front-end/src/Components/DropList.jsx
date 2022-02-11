import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
/* ------ Data props is supporting object && arr of object ------ */
export default function DropList({ data }) {
  /* ------ handle open && close DropList Component ------ */
  const [openDropList, setOpenDropList] = useState(false);
  const handelRenderInfo = () => {
    !openDropList ? setOpenDropList(true) : setOpenDropList(false);
  };

  /* ------ function Component ------ */
  const RenderObjectInfo = ({ d, data }) => {
    let objectKeys = Object.keys(data);
    return objectKeys.map((objectKey) => {
      return (
        <div key={objectKey.id}>{`${objectKey} : ${
          !d ? data[objectKey] : d[objectKey]
        }`}</div>
      );
    });
  };

  return (
    <div className="drop-list">
      <div>
        <ArrowForwardIosIcon
          onClick={handelRenderInfo}
          style={{ fontSize: 12, marginLeft: 5, cursor: "pointer" }}
        />
      </div>
      <div className="drop-list-info">
        {openDropList &&
          (Array.isArray(data) ? (
            data.map((d) => {
              return (
                <ul>
                  <RenderObjectInfo d={d} data={d} />
                </ul>
              );
            })
          ) : (
            <RenderObjectInfo data={data} />
          ))}
      </div>
    </div>
  );
}
