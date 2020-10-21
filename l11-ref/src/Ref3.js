import React, { useCallback, useState } from 'react'

export default function Ref3(props)
{
    const [isShow, setIsShow] = useState(true);
    const [initText, setInitText] = useState('true');
    
    const initialRef = useCallback(ref => ref && setInitText('true') , []);
    
    return (
        <>
            <div>
                { isShow 
                    && <input type="text" value={initText} onChange={e => setInitText( e.target.value )} 
                        ref={ initialRef } />
                }
                <button onClick={ () => setIsShow(!isShow) }>toggle</button>
            </div>
            {/* <div>
                { isShow 
                    && <input type="text" value={initText} onChange={e => setInitText( e.target.value )} 
                        ref={ ref => ref && setInitText('true') } />
                }
                <button onClick={ () => setIsShow(!isShow) }>toggle</button>
            </div> */}
        </>
    );
}
