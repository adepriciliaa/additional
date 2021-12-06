import './App.css';
import { Container } from '@mui/material';
import CardContainer from './component/CardContainer';
import TabsContainer from './component/TabsContainer';
function App() {
  return (


    <Container maxWidth="xxl" sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <TabsContainer />
      <CardContainer
        Nama="Douglas Media Console"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/douglasmediaconsole_590x.png?v=1624385997"
        Harga="Rp. 5.999.969"
        Rating="4" />
      <CardContainer
        Nama="2 Door Solna"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/dscf4124_590x.png?v=1623779818"
        Harga="Rp. 2.299.000"
        Rating="3" />
      <CardContainer
        Nama="Hayward Media Cabinet"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/haywardmediacab_590x.png?v=1624386111"
        Harga="Rp. 2.000.000"
        Rating="5" />
      <CardContainer
        Nama="Hayward Dresser"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/haywarddresser_590x.png?v=1623964905"
        Harga="Rp. 3.000.000"
        Rating="3" />
      <CardContainer
        Nama="Condesa Dresser"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/condesadresser_590x.png?v=1623964267"
        Harga="Rp. 4.500.000"
        Rating="5" />
      <CardContainer
        Nama="Douglas Dresser"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/douglasdresser_590x.png?v=1623964410"
        Harga="Rp. 3.799.000"
        Rating="5" />
      <CardContainer
        Nama="Lena Coffee Table"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/lenacoffee_x2400.png?v=1624561526"
        Harga="Rp. 1.000.000"
        Rating="4" />
      <CardContainer
        Nama="Douglas Tall Bookcase"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/DouglasTallBookcases-V2_590x.png?v=1596044621"
        Harga="Rp. 1.500.000"
        Rating="2" />
      <CardContainer
        Nama="Avers End Table"
        Sofa="https://cdn.shopify.com/s/files/1/0014/1292/3504/products/aversendtable_x2400.png?v=1624393241"
        Harga="Rp. 1.599.000"
        Rating="1" />
    </Container>
  );
}

export default App;

