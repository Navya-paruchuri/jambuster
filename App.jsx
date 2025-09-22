import React, {useState, useEffect, useRef} from 'react'
React.createElement('div',null,React.createElement('strong',null,'Emergency Vehicle')),
React.createElement('div',null,
React.createElement('select',{value:emergencyLane||'', onChange:e=>setEmergency(e.target.value||null)},
React.createElement('option',{value:''},'None'),
React.createElement('option',{value:'north'},'North'),
React.createElement('option',{value:'east'},'East'),
React.createElement('option',{value:'south'},'South'),
React.createElement('option',{value:'west'},'West')
)
)
)
),


React.createElement('div',{className:'row'},
React.createElement('div',null,React.createElement('strong',null,'Simulation')),
React.createElement('div',null,
React.createElement('button',{className:'btn', onClick:startSim},'Start'),
' ',
React.createElement('button',{className:'btn', onClick:stopSim},'Stop')
)
),


React.createElement('div',{className:'row'},
React.createElement('div',null,React.createElement('strong',null,'Backup')),
React.createElement('div',null,
React.createElement('button',{className:'btn', onClick:simulateFailAndFallback},'Simulate Fail & Fallback')
)
),


React.createElement('div',{className:'row'},
React.createElement('label',null,
React.createElement('input',{type:'checkbox', checked:autoAdjust, onChange:e=>setAutoAdjust(e.target.checked)}), ' Auto apply control after fallback'
)
)
),


React.createElement('div',null,
React.createElement('div',{style:{marginTop:12,fontSize:13,fontWeight:700}},'Logs'),
React.createElement('div',{className:'log'}, logs.map((t,i)=>React.createElement('div',{key:i},t)))
)
)
)
)
)
}
