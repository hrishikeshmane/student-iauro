import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import MyField  from "./MyField";

function MyForm({ onSubmit }) {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}>
            
            {({ values }) => (
                <Form>
                    <div>
                        <Field
                        name="firstName"
                        placeholder="First name"
                        component={MyField}
                        />
                    </div>
                    <div>
                        <Field
                        name="lastName"
                        placeholder="Last name"
                        component={MyField}
                        />
                    </div>
                    <div>
                        <Field name="email" placeholder="Email" component={MyField} />
                    </div>
                    <Button
                        style={{width:'50%', margin: 5, maxWidth: 700, color: "white", backgroundColor: "blue"}}
                        type="submit"
                    >
                        submit
                    </Button>

                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </Form>
            )}

        </Formik>
    )
}

export default MyForm
