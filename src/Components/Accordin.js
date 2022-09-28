import React from 'react'
import Items from './Items'
function Accordin() {
    return (
        <>
            <div className="container border mt-5 border-0 rounded bg-white pt-5 pb-3 px-4">
                <div className="row ">
                    <div className="col-4">
                        <h2>Questions And Answers About Login</h2>
                    </div>
                    <div className="col-8 mb-3">
                        {Items.map((value) => {
                            return <div className="accordion accordion-flush border  mb-3" id="accordionFlushExample" key={value.id}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={`flush-heading${value.id}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${value.id}`} aria-expanded="false" aria-controls={`flush-collapse${value.id}`}>
                                            {value.question}
                                        </button>
                                    </h2>
                                    <div id={`flush-collapse${value.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${value.id}`}data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{value.answer}</div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordin
