import * as React from 'react';

interface IModalPageProps {
  modalVisible: boolean;
  closePage: () => void;
}

const ModalPage: React.FC<IModalPageProps> = (props) => {
  return (
    <div className={props.modalVisible ? 'modal_visible' : 'modal_hidden'}>
      <div className="modal_container">Card added successfully</div>
      <button className="modal_button" onClick={props.closePage}>
        Ok
      </button>
    </div>
  );
};

export default ModalPage;
