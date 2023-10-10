import React, {useEffect, useRef, useState} from 'react';
import stylesAdmin from  '../../styles/admin.module.css'
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export function Terminal({ lines }) {

  const ref = useRef<HTMLDivElement>(null);

  const [autoScroll, setAutoScroll] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoScroll(event.target.checked);
  };

  useEffect(() => {
    if (autoScroll && lines.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [lines.length]);

  const label = { inputProps: { 'aria-label': 'Automatic scroll to bottom' } };

  return (
    <>
      <div className={stylesAdmin.terminal} id="file">
        <pre>
          {
            lines.map((line, index) =>
              <p key={ index }>
                <span className={stylesAdmin.lineNumber}>{ (index+1).toString().padStart(4, ' ') }:</span>
                <span>{ line }</span>
              </p>
            )
          }
        </pre>
        <div ref={ref} />
      </div>
      <div className={stylesAdmin.bottom_bar}>
          <FormControlLabel control={
            <Checkbox
              onChange={handleChange}
              defaultChecked
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}
            />
            } label="Automatically scroll down" />
      </div>
    </>
  );
}