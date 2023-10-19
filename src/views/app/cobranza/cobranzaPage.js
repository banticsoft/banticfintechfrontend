import React from 'react';
import { Row, Button, Card, CardBody, Table, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const CobranzaPage = ({ match }) => {
    
    return (
    <>
        <Row>
            <Colxx xxs="12">
                <Breadcrumb heading="cobranza" match={match} />
                <Separator className="mb-5" />
            </Colxx>
        </Row>
        <Row>
            <Colxx xxs="12" className="mb-4">
                <p>
                    <IntlMessages id="cobranza" />
                </p>            

                                
            </Colxx>
        </Row>


        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="table.bootstrap-basic" />
              </CardTitle>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Moneda</th>
                    <th>Estado</th>
                    <th>Fecha de Expiracion</th>
                    <th>Ver QR</th>
                    <th>Regenerar QR</th>
                    <th>Verificar</th>
                    <th>Cancelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                        <td>Reinaldo</td>
                        <td>50</td>
                        <td>BOB</td>
                        <td>A</td>
                        <td>2011/04/25</td>
                        <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Ver QR</Button></td>
                        <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Re Generar QR</Button></td>
                        <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Verificar</Button></td>
                        <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Cancelar</Button></td>
                  </tr>                  
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
    </>
    );
};
export default CobranzaPage;
