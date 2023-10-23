import React, { useState } from 'react';
import { Row, Label, Button, FormGroup, CardBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Formik, Form, Field } from 'formik';
// import Breadcrumb from 'containers/navs/Breadcrumb';
import { connect } from 'react-redux';
import { generarQR } from 'redux/actions';

const validateMount = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your Monto';
  }
  return error;
};


const GenerarQR = ({ history, miqr, generarQRAction }) => {

  const [amount] = useState('');
  const [glosa] = useState('');
  console.log("valor del qr ...")
  console.log(miqr)

  const initialValues = { amount, glosa };

      const onSubmit = (values) => {
        console.log(values.amount)
        console.log(values.glosa)
        if (values.amout !== '' && values.glosa !== '') {
          generarQRAction(values, history);
        }      
      };
      console.log("generando qr..")
    
      return (
        <>
          <Row>
            <Colxx xxs="12">
              {/* <Breadcrumb heading="generarqr" match='match' /> */}
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" className="mb-4">
              <p>
                <IntlMessages id="generarqr" />
              </p>             

            <Row>
            <Colxx xxs="4"/>
            <Colxx xxs="3">
              <CardBody>
                <div className="form-side">
                  <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ errors, touched }) => (
                      <Form className="av-tooltip tooltip-label-bottom">
                        <FormGroup className="form-group has-float-label">
                          <Label>
                            <IntlMessages id="monto" />
                          </Label>
                          <Field
                            className="form-control"
                            name="amount"
                            type="number"
                            validate={validateMount}
                          />
                          {errors.amout && touched.amout && (
                            <div className="invalid-feedback d-block">
                              {errors.amout}
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup className="form-group has-float-label">
                          <Label>
                            <IntlMessages id="glosa" />
                          </Label>
                          <Field
                            className="form-control"
                            type="text"
                            name="glosa"
                            
                          />
                          {errors.glosa && touched.glosa && (
                            <div className="invalid-feedback d-block">
                              {errors.glosa}
                            </div>
                          )}
                          <div className="flex w-full justify-center">                    
                            <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Generar QR</Button>
                        </div>
                        </FormGroup>
                        
                      </Form>
                    )}
                  </Formik>             
                </div>
              </CardBody>
              
            </Colxx>
            </Row>
            
            </Colxx>
          </Row>
        </>
      );
    };
// export default GenerarQR;

const mapStateToProps = ({ qrReducer }) => {
  const { miqr, erro } = qrReducer;
  return { miqr, erro };
};

export default connect(mapStateToProps, {
  generarQRAction: generarQR,
})(GenerarQR);
