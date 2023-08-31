import logo from './logo.svg';
import './App.css';
import { Car } from './componenet/Car';
import "./componenet/style.css"

function App() {
  return (
    <div className='main'>
      <h2>Car Brands & Varients</h2>
      <Car
      title="TOYOTA"
      
      data={["Toyota Glanza","Toyota Fortuner","Toyota Camry","Toyota Innova Crysta"]}        />

<Car
      title="BMW"
      
      data={["BMW 3 Series","2023 BMW X1","2023 BMW Z4","2021 BMW iX"] }
        />

<Car
      title="Maruti suzuki"
      
      data={["Maruti Suzuki Brezza","Maruti Suzuki Jimny","Maruti Suzuki Baleno","Maruti Suzuki Grand Vitara"]}
    
        />

<Car
      title="Mercedes"
      
      data={["Mercedes-Benz G-Class","Mercedes-Benz GLA","Mercedes-Benz S-Class","Mercedes G vegan"]}
    
        />

<Car
      title="Audi"
      
      data={["2022 Audi Q5","2021 Audi RS5","2023 Audi Q3 Sportback","2022 Audi A8 L","2023 Audi e-tron GT"]}
    
        />
       
        <Car
      title="Lamborghini"
      
      data={["2019 Lamborghini Aventador","2022 Lamborghini Huracan","2023 Lamborghini Urus"]}
    
        />

    </div>
  );
}

export default App;
