import "./modal.css";

interface MyProps {
  onClick: () => void;
  modalContent: any;
  className: string;
}

const Modal = (props: MyProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClick}>
          &times;
        </span>
        <div className="modal-btn">
          {props.modalContent}
          {/* <button onClick={props.onBtnClick}>{props.btn2Txt}</button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
