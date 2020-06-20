import styles from './login_modal.module.scss'
import { useRef, useState, useImperativeHandle } from 'react'
import Input from '../Input/Input'
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { IModalTypeProps } from '../Modal/Modal';

export default function LoginModal(props: IModalTypeProps) {
    const [showing, setShowing] = useState(false)
    const formRef = useRef<FormHandles>(null);

    const openModal = ():void => {
        setShowing(true)
    }

    function closeModal(event) {
        if (event.target.id == "login_modal_open" || event.target.id == "close_modal") {
            setShowing(false)
        }
    }

    useImperativeHandle(props.modalReference, () => ({ openModal }))

    const handleSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
      };

    return (
        <div id={showing ? "login_modal_open" : "login_modal_hidden"} className={showing ? styles.modal__open : styles.modal__hidden} onClick={(event) => closeModal(event)}>
            <div className={showing ? styles.modal__content__open : styles.modal__content__hidden}>
                <p>Test Modal Login</p>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="email" />
                    <Input name="password" />

                    <button type="submit">Sign up</button>
                </Form>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="email" />
                    <Input name="password" />

                    <button type="submit">Sign in</button>
                </Form>
            </div>
        </div>
    );
}