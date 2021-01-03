import React, {useReducer, useEffect } from 'react';
import ShipmentNavbar from './components/NavBar/Navbar.js';
import Counter from './components/Counters/Counters';
import TimeLineItem from './components/Timeline/TimeLineItem';
import ShipmentTable  from './components/ShipmentTable/ShipmentTable';
import './App.scss';
import "antd/dist/antd.css";
import axios from "axios";
import {notification} from 'antd';

const reducer = (state, event) => {
    switch (event.type) {
      case "TABLE_DATA_FETCH_STARTED": {
        return {
          ...state,
           isLoading: true,
        };
      }
      case "FETCH_TABLE_DATA_SUCCESS": {
        return {
          ...state,
            data: event.data,
            filterData: event.filterData,
            isLoading: false,
        };
      }
      case "FETCH_TABLE_DATA_ERROR": {
        return {
          ...state,
            data: [],
            filterData: [],
            isLoading: false,
        };
      }
      case "SET_STATUS_COUNTER": {
        return {
          ...state,
            count : event.data
        };
      }
      case "SET_STATUS_FILTER": {
        return {
          ...state,
            filter : event.data,
            filterData: event.filterData,
        };
      }
      default: {}
    }
};

const initialState = {
      data: [],
      filterData : [],
      isLoading: false,
      count : {
        "DEL": 0,
        "INT": 0,
        "OOD": 0,
        "DEX": 0,
        "NFI": 0
    },
    filter: "DEL"
  };

const Shipment = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        data,
        filterData,
        isLoading,
        count,
        filter
    } = state;

    const fetchShipmentData = async () => {
        let url = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch'
        let token = 'tTU3gFVUdP'
        let payload = {
            email: "mayankmittal@intugine.com"
        }
        let params = {
            headers: {Authorization: `Bearer ${token}`}
        }
        let obj = {
            "DEL": 0,
            "INT": 0,
            "OOD": 0,
            "DEX": 0,
            "NFI": 0
        }
        await axios.post(
            url,
            payload, 
            params
          ).then((response) => {
            console.log("response= ",response);
            // var jsonData = JSON.parse(response);
            dispatch({ type: "FETCH_TABLE_DATA_SUCCESS", data: response.data, filterData: response.data.filter(item => item.current_status_code == filter) });
            response.data.map((item, idx) => {
                if(item.current_status_code == "DEL")
                    obj.DEL+=1;
                else if(item.current_status_code == "INT")
                    obj.INT+=1;
                else if(item.current_status_code == "OOD")
                    obj.OOD+=1;
                else if(item.current_status_code == "DEX")
                    obj.DEX+=1;
                else
                    obj.NFI+=1;
            })
            dispatch({ type: "SET_STATUS_COUNTER", data: obj });
          }, (error) => {
            console.log(error);
            dispatch({ type: "FETCH_TABLE_DATA_ERROR" });
            notification.error({
              message: "Failed To Fetch Requests!",
              placement: "topRight",
              duration: 5,
            });
          });
      };

      useEffect(() => {
        dispatch({ type: "TABLE_DATA_FETCH_STARTED" });
        fetchShipmentData();
      }, []);
    
    const onFilterApply = async (value) => {
        dispatch({ type: "SET_STATUS_FILTER" , data: value, filterData: data.filter(item => item.current_status_code == value)})
    }

    const statuses = ["DEL", "INT", "OOD", "DEX", "NFI"]
    return (
        <div>
            <ShipmentNavbar />
            <div style={{marginTop:30, marginLeft:'400px', display: 'flex', flexDirection: 'row'}}>
                {
                    statuses.map((value, index) => <Counter name={value} counter={count[value]} applyFilter={onFilterApply}/>)
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop:120, marginRight: 20, marginLeft: 20}}>
                <div>
                {data && data.map((val, idx) => (
                    <TimeLineItem data={val} key={idx} />
                ))}
                </div>
                <ShipmentTable data={filterData} isLoading={isLoading} />
            </div>
        </div>
    );
}

export default Shipment;