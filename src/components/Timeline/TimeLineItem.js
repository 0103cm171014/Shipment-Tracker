import React from 'react';
import './Timeline.css';

const TimeLineItem = (props) => {
    //console.log("timeline props= ", props.data.scan)
    return (
    <div class="container">
        {props.data && props.data.scan && props.data.scan.map((item, index) => (
            <div class="row">
            <div class="col-md-12 col-lg-12">
                <div id="tracking-pre"></div>
                <div id="tracking">
                    <div class="tracking-list">
                                <div class="tracking-item">
                                    <div class="tracking-icon status-intransit">
                                        <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                        </svg>
                                        <i class="fas fa-circle"></i>
                                    </div>
                                    <div class="tracking-content">{item.location} <span>{item.time}</span></div>
                                </div>
                            <div>   
                        </div>
                    </div>
                </div> 
            </div>  
            </div>       
        ))
    }
    </div> 
);
}

export default TimeLineItem;