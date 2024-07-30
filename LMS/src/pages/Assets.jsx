import React from 'react';
import PropTypes from 'prop-types';
import { assetShape } from '../types/types.js';
import engine from '../assets/assets-images/engine.png';
import motherboard from '../assets/assets-images/motherboard.png';
import AssetCard from '../components/AssetCard.jsx';
import AssetModal from '../components/AssetModal.jsx';

function Assets() {
    return (
        <div className="assets dashboard">
            <div>
                <h4 className="mt-2">Assets</h4>
                <div className="row">
                    {/* First asset */}
                    <div className="col-3 mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop0">
                            <AssetCard id={0} name="Combustion Engine" type="3D model" format="gltf" preview={engine} />
                        </a>
                        <AssetModal id={0} name="Combustion Engine" type="3D model" format="gltf" preview={engine} modalId="staticBackdrop0" />
                    </div>
                    
                    {/* Second asset */}
                    <div className="col-3 mb-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                            <AssetCard id={1} name="Motherboard" type="3D model" format="stl" preview={motherboard} />
                        </a>
                        <AssetModal id={1} name="Motherboard" type="3D model" format="stl" preview={motherboard} modalId="staticBackdrop1" />
                    </div>

                    {/* Add more assets manually here */}
                </div>
            </div>
        </div>
    );
}

Assets.propTypes = {
    assets: PropTypes.arrayOf(assetShape),
};

export default Assets;
