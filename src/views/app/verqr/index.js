import React from 'react';
import { Button, Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import ImageB64 from 'components/base64toimg/ImageB64'

const VerQRPage = ({ match }) => {

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="ver qr" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="verqr" />
          </p>

          <div className="flex h-[calc(100vh-50px)] items-center justify-center">
             <div className="bg-white p-5 rounded-2 text-secondary" style={{ width: '35 rem', border: '1 px solid #EE7A19'}}>
            <div className="flex justify-center">
                No tienes QR
            </div>

            {/* imprimir ? (<PDFViewer style={{width: "100%", height: "90vh"}}> <ImprimirPDFPage/> </PDFViewer>) : <h1>cargando ...</h1> */} 
            {/* {imprimir ? (<h1> vas a imprimir algo </h1>) : <h1>cargando ...</h1>} */}

            <div className="flex gap-x-2 w-full justify-between">                    
                <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2' onClick={() => {}}>Guardar</Button>
                <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Imprimir</Button>
                <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Nuevo QR</Button>
                <Button className='bg-orange-400 text-white px-4 py-2 rounded-md my-2'>Verificar</Button>
            </div>
        </div>
    </div> 

        </Colxx>
      </Row>
    </>
  );
};

export default VerQRPage;