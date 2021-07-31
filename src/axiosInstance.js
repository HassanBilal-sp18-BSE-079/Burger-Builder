import axios from 'axios';


const insatnce = axios.create({
    baseURL:"https://burger-builder-5edb1-default-rtdb.asia-southeast1.firebasedatabase.app/"
});


export default insatnce;