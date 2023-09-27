import React, {useEffect, useRef} from 'react';
import stylesAdmin from  '../../styles/admin.module.css'

export function Terminal({ lines }) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lines.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [lines.length]);

  return (
    <div className={stylesAdmin.terminal} id="file">
      <pre>
        {
          lines.map((line, index) =>
            <p key={ index }>
              <span className={stylesAdmin.lineNumber}>{ index.toString().padStart(4, ' ') }:</span>
              <span>{ line }</span>
            </p>
          )
        }
      </pre>
      <div ref={ref} />
    </div>
  );
}