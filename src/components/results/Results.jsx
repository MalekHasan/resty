import './results.scss'

const Results=(props)=>{
 function syntaxHighlight(json) {
    if (!json) return ""; //no JSON from response
  
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  }
    return (
      <section className='result-section'>
        {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
        <div>
      <h3 className="header">
        Show Your Response As JSON 
      </h3>
      <pre
        dangerouslySetInnerHTML={{
          __html: syntaxHighlight(JSON.stringify(props.data, undefined, 2))
        }}
      />
    </div>
      </section>
    );
  }

export default Results;