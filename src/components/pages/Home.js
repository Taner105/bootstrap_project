import React from 'react'
import Slider from '../inc/Slider'
import { useNavigate } from 'react-router-dom'
import Vmc from '../inc/Vmc';
import tv8 from "../images/tv8.jpg"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className='main-heading'>Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam placeat officia. Error aperiam blanditiis aliquid ducimus laboriosam earum tempore minus inventore ut repellendus illum similique eos ipsa non reiciendis beatae, unde incidunt, necessitatibus voluptate, mollitia aut. Unde repellendus possimus ut, iusto porro corporis, assumenda, nemo quibusdam perspiciatis nobis quisquam.</p>
                            <button onClick={() => navigate("/about")} className='btn btn-warning shadow'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>
            <Vmc />
            <section className="section bg-light border-top">
                <div className="conatiner">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className='main-heading'>
                                Our Services
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img className='w-100 border-bottom' src={tv8} alt="tv8" />
                                <div className="card-body">
                                    <h6>TV8 1</h6>
                                    <div className="underline"></div>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos deleniti libero voluptatem, </p>
                                    <a onClick={() => navigate("/services")} className='btn btn-link'>read more</a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img className='w-100 border-bottom' src={tv8} alt="tv8" />
                                <div className="card-body">
                                    <h6>TV8 1</h6>
                                    <div className="underline"></div>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos deleniti libero voluptatem, </p>
                                    <a onClick={() => navigate("/services")} className='btn btn-link'>read more</a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img className='w-100 border-bottom' src={tv8} alt="tv8" />
                                <div className="card-body">
                                    <h6>TV8 1</h6>
                                    <div className="underline"></div>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos deleniti libero voluptatem, </p>
                                    <a onClick={() => navigate("/services")} className='btn btn-link'>read more</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Home