import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function index(props) {
  return (
    <section class="breadcrumb-bottom-area">
    <div class="container5">
        <div class="row5">
            <div class="col5">
                <div class="breadcrumb-bottom">
                    <div class="left pull-left">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><FontAwesomeIcon icon={faAngleRight} style={{ height: '14px' }}/></li>
                            <li class="active">{props.title}</li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default index