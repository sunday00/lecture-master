import React from 'react';
import ModuleApplied from './ModuleApplied';
import ModuleAppliedNot from './ModuleAppliedNot';

const CssModuleExample = () => {
    return (
        <div className="wrap">
            <h2>Wrap</h2>
            <ModuleApplied></ModuleApplied>
            <ModuleAppliedNot></ModuleAppliedNot>
        </div>
    );
};

export default CssModuleExample;
