import styles from './login_modal.module.scss'
import { useRef, useState, useImperativeHandle } from 'react'
import Input from '../Input/Input'
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core'
import { IModalTypeProps } from '../Modal/Modal'
import api from '../../services/api'
import { useDispatch } from 'react-redux';
import { AuthTypes, AuthAction, AuthUser } from '../../store/auth/types';
import { AxiosResponse } from 'axios';
import TabsComponent, { Panel } from '../TabsComponent/TabsComponent';

interface ISignIn {
    email_signin: string
    password_signin: string
}

interface ISignUp {
    email_signup: string
    password_signup: string
}

export default function LoginModal(props: IModalTypeProps) {
    const [showing, setShowing] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const formRef = useRef<FormHandles>(null);
    const dispatch = useDispatch()

    const openModal = (): void => {
        setShowing(true)
    }

    function closeModal(event = null): void {
        if (event) {
            if (event.target.id == "login_modal_open" || event.target.id == "close_modal") {
                setShowing(false)
            }
        } else {
            setShowing(false)
        }
    }

    function successfulSignIn(user: AuthUser): void {
        api.defaults.headers.common = { 'Authorization': `Bearer ${user.accessToken}` }
        const setUserDataAction: AuthAction = {
            type: AuthTypes.SET_USER_DATA,
            refreshToken: null,
            logout: null,
            actionUser: {
                _id: user._id,
                username: user.username,
                accessToken: user.accessToken
            },
        }
        dispatch(setUserDataAction)
        closeModal()
    }

    useImperativeHandle(props.modalReference, () => ({ openModal }))

    const handleSignInSubmit: SubmitHandler<ISignIn> = async (data: ISignIn): Promise<void> => {
        const signIn = { username: data.email_signin, password: data.password_signin }
        //Test Credentials caiogallo88 @Test123

        await api.post("/auth/signin", signIn, { withCredentials: true })
            .then((response: AxiosResponse<AuthUser>) => {
                if (response.status == 201) {
                    successfulSignIn(response.data)
                }
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.response.data.message)
            })
    };

    const handleSignUpSubmit: SubmitHandler<ISignUp> = async (data: ISignUp): Promise<void> => {
        const signUp = { username: data.email_signup, password: data.password_signup }
        //Test Credentials caiogallo88 @Test123

        await api.post("/auth/signup", signUp, { withCredentials: true })
            .then(async (response: AxiosResponse<AuthUser>) => {
                if (response.status == 201) {
                    const response_signin = await api.post("/auth/signin", { username: data.email_signup, password: data.password_signup }, { withCredentials: true })
                    console.log(response_signin)
                    if (response.status == 201) {
                        successfulSignIn(response.data)
                    }
                }
            })
            .catch((error) => {
                console.log(error.response);
                setErrorMessage(error.response.data.message)
            })
    };

    return (
        <div id={showing ? "login_modal_open" : "login_modal_hidden"} className={showing ? styles.modal__open : styles.modal__hidden} onClick={(event) => closeModal(event)}>
            <div className={showing ? styles.modal__content__open : styles.modal__content__hidden}>
                <TabsComponent>
                    <Panel>
                        <h2>{errorMessage}</h2>
                        <Form ref={formRef} onSubmit={handleSignInSubmit}>
                            <div className={styles.form__container}>
                                <label>
                                    E-mail:
                                    <Input name="email_signin" />
                                </label>
                                <label>
                                    Senha:
                                    <Input name="password_signin" type="password" />
                                </label>
                                <button className={styles.login__button} type="submit">Fazer Login</button>
                            </div>
                        </Form>
                    </Panel>
                    <Panel>
                        <h2>{errorMessage}</h2>
                        <Form ref={formRef} onSubmit={handleSignUpSubmit}>
                            <div className={styles.form__container}>
                                <label>
                                    E-mail:
                                    <Input name="email_signup" />
                                </label>
                                <label>
                                    Senha:
                                    <Input name="password_signup" type="password" />
                                </label>

                                <button className={styles.login__button} type="submit">Cadastrar-se</button>
                            </div>
                        </Form>
                    </Panel>
                </TabsComponent>
            </div>
        </div>
    );
}