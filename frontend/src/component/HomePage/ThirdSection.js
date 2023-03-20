import React from 'react'
import './ThirdSection.css'
import fly from '../../image/butterfly.png'
import thera from '../../image/therapist.png'

function ThirdSection() {
  return (
    <div class="choosing-area">
    <div class="container2">
        <div class="sec-title2 text-center">
            <h1>Why Choosing Us?</h1>
            <div class="border mar0auto">
                <img src={fly} alt="fly" height='30px' />   
            </div>
        </div>
        <div class="row2">
            <div class="col2">
                <ul>
                    <li class="single-item bdr-btm">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                <span class="flaticon-medical-1"></span>
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>Mind Relaxing</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                    <li class="single-item bdr-btm">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                
                                
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>M3ana lBayoudhi</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                    <li class="single-item bdr-btm">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                <span class="flaticon-people-1"></span>
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>Special Guides</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                </ul>
                <ul>
                    <li class="single-item">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                <span class="flaticon-nature-1"></span>
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>Safe And Confidential</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                    <li class="single-item">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                <img className='pok' src={thera} alt='therapist' height={'47px'} />
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>Well Care Therapists</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                    <li class="single-item">
                        <div class="iocn-holder">
                            <div class="inner-border">
                                <span class="flaticon-flower"></span>
                            </div>    
                        </div>
                        <div class="text-holder">
                            <h3>User-Friendly Design</h3>
                            <p>Provides a professional support and nutrition consulting service aimed to helping you achieve.</p>    
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</div>
  )
}

export default ThirdSection