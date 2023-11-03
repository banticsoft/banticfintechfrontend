import React, { useEffect, useState } from 'react';
import { Row, Button, Card, CardBody, Table, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { getCurrentUser } from 'helpers/Utils';
import { getAllQRByUser } from 'api/auth';
import BotonVerQR from './BotonVerQR'

const CobranzaPage = ({ match }) => {
    const [allQRByUser, setAllQRByUser] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTupla, setCurrentTupla] = useState(null);

    useEffect( async () => {
      try {
        const { title: userName} = getCurrentUser();
        const data = {
          userName, 
          fkCustomer: "1", 
          typeRequest: "DATAQR"
        }
        console.log("SE ESTA EJECUTANDO EL USEEFECT ....")
        const resultado = await getAllQRByUser(data);
        console.log(resultado.data.data)
        setAllQRByUser(resultado.data.data)
      } catch (error) {
        console.log("error al obtener los datos de Cobranza")
      }
      
    }, [])

    const handleVerModal = (tupla) => {
      setCurrentTupla(tupla);
      setIsModalOpen(true);
      // setTuplaQR(tuplaQR)
      console.log("la tupla es: ")
      console.log(tupla)
      // setModalBasicP(!modalBasicP);     
    }

    return (
    <>
        <Row>
            <Colxx xxs="12">
                <Breadcrumb heading="menu.cobranza" match={match} />
                <Separator className="mb-5" />
            </Colxx>
        </Row>
        <Row>
            <Colxx xxs="12" className="mb-4">
                <p>
                    <IntlMessages id="menu.cobranza" />
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
                    <th>Verificar</th>
                    <th>Cancelar</th>
                  </tr>
                </thead>
                <tbody>

                {
                  allQRByUser.length === 0 ? <tr><td colSpan="9" align='center'>Cargando ...</td></tr> : undefined
                }            
                { 
                  allQRByUser.map((tupla) => (
                                 
                      <tr key={tupla.id}>
                          <th scope="row"> {tupla.id} </th>
                          <td> {tupla.userName} </td>
                          <td> {tupla.amount} </td>
                          <td> {tupla.currency} </td>
                          {/* <td> {tupla.status} </td>  */}                         
                          { 
                            // eslint-disable-next-line
                            parseInt(tupla.status, 10) === 0 ? <td> sin pagar </td> : <td style={{background: '#5abd71', color: 'white'}}> <span style={{background: '#5abd71', color: 'white'}}>pagado</span> </td>
                          }
                          
                          <td> {new Date(tupla.expirationdate).toLocaleDateString()} </td>
                          {
                            parseInt(tupla.status, 10) === 0 ?
                            
                              <>
                              <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'  onClick={ () => handleVerModal(tupla) }>Ver QR</Button></td>
                              <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Verificar</Button></td> 
                              <td><Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Cancelar</Button></td>
                              </>
                            
                            :
                            (
                              /* eslint-disable */
                              <>                              
                                <td></td>
                                <td></td>
                                <td></td>
                              </>
                              /* eslint-enable */
                            )
                          }                     
                          
                     </tr> 
                  
                  ))
                } 
                </tbody>                
              </Table>

              {isModalOpen && (
                  <BotonVerQR
                    currentTupla={currentTupla}
                    /* key={currentTupla.id} */
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                  />
                )}
                
            </CardBody>
          </Card>
        </Colxx>
    </>
    );
};
export default CobranzaPage;
