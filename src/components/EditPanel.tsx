import { useRef } from "react";
import {useDispatch} from "react-redux";
import {undo, redo, erase} from "../actions";

const EditPanel = () => {
    // const contextRef = useRef(null)
    const dispatch = useDispatch();
    // const setToErase = () => {
    //     contextRef.globalCompositeOperation = 'destination-out' 
    // }
  return (
      <div className="window edit">
          <div className="title-bar">
              <div className="title-bar-text">Edit</div>
          </div>
          <div className="window-body">
              <div className="field-row">

                  <button
                      className="button undo"
                      onClick={() => dispatch(undo())}
                  >
                      Undo
                  </button>

                  <button
                      className="button redo"
                      onClick={() => dispatch(redo())}
                  >
                      Redo
                  </button>
                  <button onClick={
                    () => dispatch(erase())
                  }>Erase</button>
                  
              </div>
          </div>
      </div>
  );
};

export default EditPanel;
