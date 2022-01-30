import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                //backgroundColor: "red"
            }}>
                <div style={{
                    maxWidth: "900px",
                    width: "30rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    padding: 50,
                    borderRadius: 15,
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Form 
                        style={{
                            width: "100%",
                        }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                style={{
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    marginBottom: 20,
                                    borderRadius: 15,
                                    border: "none",
                                }} 
                                type="email" 
                                placeholder="Enter email"
                                tabIndex={ 1 } />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                style={{
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    marginBottom: 20,
                                    borderRadius: 15,
                                    border: "none",
                                }} 
                                type="password" 
                                placeholder="Password"
                                tabIndex={ 2 } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Check me out" 
                                tabIndex={ 3 } />
                        </Form.Group>
                        <div 
                            style={{
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                marginBottom: 20,
                                borderRadius: 15,
                            }}
                            onClick={ handleGoogleLogin }
                            tabIndex={ 4 }
                        >
                            <span 
                                className="btn btn-outline-dark" 
                                href="$" 
                                role="button" 
                                style={{
                                    textTransform: "none",
                                    border: "none",
                                    width: '100%',
                                }}
                            >
                                <img 
                                    width="20px" 
                                    style={{
                                        marginBottom: 3,
                                        marginRight: 5,
                                    }}
                                    alt="Google sign-in" 
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
                                />
                                Sign up with Google
                            </span>
                        </div>
                        <div style={{
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            marginBottom: 20,
                            borderRadius: 15,
                        }}
                        tabIndex={ 5 }>
                            <a 
                                className="btn btn-outline-dark" 
                                href="/users/googleauth" 
                                role="button" 
                                style={{
                                    textTransform: "none",
                                    border: "none",
                                    width: '100%',
                                }}
                            >
                                Sign up
                            </a>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};
