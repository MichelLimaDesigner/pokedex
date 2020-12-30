import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

import { Container, Modal, Lightbox } from './styles';
import Bug from '../../assets/images/Types/bug.png';
import Dark from '../../assets/images/Types/dark.png';
import Dragon from '../../assets/images/Types/dragon.png';
import Electric from '../../assets/images/Types/electric.png';
import Fairy from '../../assets/images/Types/fairy.png';
import Fighting from '../../assets/images/Types/fighting.png';
import Fire from '../../assets/images/Types/fire.png';
import Flying from '../../assets/images/Types/flying.png';
import Ghost from '../../assets/images/Types/ghost.png';
import Grass from '../../assets/images/Types/grass.png';
import Ground from '../../assets/images/Types/ground.png';
import Ice from '../../assets/images/Types/ice.png';
import Normal from '../../assets/images/Types/normal.png';
import Poison from '../../assets/images/Types/poison.png';
import Psychic from '../../assets/images/Types/psychic.png';
import Rock from '../../assets/images/Types/rock.png';
import Steel from '../../assets/images/Types/steel.png';
import Water from '../../assets/images/Types/water.png';

const ModalTypes = forwardRef((props, ref) =>{

    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle( ref, () => ({
            open() {
                setIsOpen(true);
            },
            close() {
                setIsOpen(false);
            }
        }),
    )

    function close(){
        setIsOpen(false);
    }

    return(
        <div>
            { isOpen ? (
                <Container>
                    <Modal>
                        <h1> Pokemon Types </h1>

                        <div className="modal__grid">
                            <Link to={`/type/1`}>
                                <div className="type normal">
                                    <h3> Normal </h3>
                                    <figure>
                                        <img src={Normal} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/2`}>
                                <div className="type fighting">
                                    <h3> Fighting </h3>
                                    <figure>
                                        <img src={Fighting} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/3`}>
                                <div className="type flying">
                                    <h3> Flying </h3>
                                    <figure>
                                        <img src={Flying} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/4`}>
                                <div className="type poison">
                                    <h3> Poison </h3>
                                    <figure>
                                        <img src={Poison} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/5`}>
                                <div className="type ground">
                                    <h3> Ground </h3>
                                    <figure>
                                        <img src={Ground} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/6`}>
                                <div className="type rock">
                                    <h3> Rock </h3>
                                    <figure>
                                        <img src={Rock} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/7`}>
                                <div className="type bug">
                                    <h3> Bug </h3>
                                    <figure>
                                        <img src={Bug} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/8`}>
                                <div className="type ghost">
                                    <h3> Ghost </h3>
                                    <figure>
                                        <img src={Ghost} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/9`}>
                                <div className="type steel">
                                    <h3> Steel </h3>
                                    <figure>
                                        <img src={Steel} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/10`}>
                                <div className="type fire">
                                    <h3> Fire </h3>
                                    <figure>
                                        <img src={Fire} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/11`}>
                                <div className="type water">
                                    <h3> Water </h3>
                                    <figure>
                                        <img src={Water} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/12`}>
                                <div className="type grass">
                                    <h3> Grass </h3>
                                    <figure>
                                        <img src={Grass} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/13`}>
                                <div className="type electric">
                                    <h3> Electric </h3>
                                    <figure>
                                        <img src={Electric} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/14`}>
                                <div className="type psychic">
                                    <h3> Psychic </h3>
                                    <figure>
                                        <img src={Psychic} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/15`}>
                                <div className="type ice">
                                    <h3> Ice </h3>
                                    <figure>
                                        <img src={Ice} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/16`}>
                                <div className="type dragon">
                                    <h3> Dragon </h3>
                                    <figure>
                                        <img src={Dragon} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/17`}>
                                <div className="type dark">
                                    <h3> Dark </h3>
                                    <figure>
                                        <img src={Dark} alt=""/>
                                    </figure>
                                </div>
                            </Link>

                            <Link to={`/type/18`}>
                                <div className="type fairy">
                                    <h3> Fairy </h3>
                                    <figure>
                                        <img src={Fairy} alt=""/>
                                    </figure>
                                </div>
                            </Link>
                        </div>

                    </Modal>
                    <Lightbox onClick={ close } />
                </Container>
            ) : '' }
        </div>
    )
});

export default ModalTypes;