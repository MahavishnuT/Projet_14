import { useDispatch } from 'react-redux'
import './modal.scss'
import { showModal } from '../../redux/redux'

function Modal() {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(showModal())
  }
  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-text">Employee successfully added to the list</p>
        <button className="modal-close" onClick={() => closeModal()}>
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
