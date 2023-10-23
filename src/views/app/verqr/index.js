import React from 'react';
import { Button, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
import ImageB64 from 'components/base64toimg/ImageB64';
import { connect } from 'react-redux';
// import ImageB64 from 'components/base64toimg/ImageB64'

const VerQRPage = ({ miqr }) => {

  const descargar = async (blobURLPublic) => {
    const imagen = await fetch(blobURLPublic)
    const imgblob = await imagen.blob()
    const imgURL = URL.createObjectURL(imgblob)
    const link = document.createElement('a')
    link.href = imgURL
    link.download = "imgen qr.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link);
  }

  const handleGuardarQR = () => {
    let blobURLPublic = '';
    const decodedImage = atob(miqr);

    // Crear un array de bytes
    const byteNumbers = new Array(decodedImage.length);
    for (let i = 0; i < decodedImage.length; i++) {
      byteNumbers[i] = decodedImage.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Crear un blob a partir del array de bytes
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    // Crear una URL de objeto (blob)
    const blobUrl = URL.createObjectURL(blob);

    blobURLPublic = blobUrl

    descargar(blobURLPublic);

    // setImageUrl(blobUrl);

    // Limpiar la URL de objeto cuando el componente se desmonta
    return () => URL.revokeObjectURL(blobUrl);
  }


  return (
    <>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="ver qr" match={match} /> */}
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
              { miqr ? (<ImageB64 base64String = {miqr}/>) : <h3>debes generar un nuevo QR ...</h3>}
            </div>

            {/* imprimir ? (<PDFViewer style={{width: "100%", height: "90vh"}}> <ImprimirPDFPage/> </PDFViewer>) : <h1>cargando ...</h1> */} 
            {/* {imprimir ? (<h1> vas a imprimir algo </h1>) : <h1>cargando ...</h1>} */}

            <div className="flex gap-x-2 w-full justify-between">                    
                <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2' onClick={ handleGuardarQR }>Guardar</Button>
                <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Imprimir</Button>
                
                <NavLink to="/app/generarqr/generarqr">
                    <Button className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Nuevo QR</Button>
                </NavLink>                
                <Button className='bg-orange-400 text-white px-4 py-2 rounded-md my-2'>Verificar</Button>
            </div>
        </div>
    </div> 

        </Colxx>
      </Row>
    </>
  );
};

// export default VerQRPage;

const mapStateToProps = ({ qrReducer }) => {
  const { miqr, erro } = qrReducer;
  return { miqr, erro };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(VerQRPage);