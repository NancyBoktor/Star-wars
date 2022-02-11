import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
        {openDropList ? (
          <ExpandMoreIcon onClick={handelRenderInfo} />
        ) : (
          <ChevronRightIcon onClick={handelRenderInfo} />
        )}
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
