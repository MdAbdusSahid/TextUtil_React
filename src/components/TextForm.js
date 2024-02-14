import React, {useState} from "react"

export default function TextForm(props) {
  const [text, setText] = useState("")

  let handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("All character converted to Upper-Case", "success")
  }
  let handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("All character converted to Lower-Case", "success")
  }
  let handleClear = () => {
    let newText = ""
    setText(newText)
    props.showAlert("The field has been cleared", "success")
  }
  let handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleCopy = (e) => {
    if (text) {
      navigator.clipboard.writeText(text)
    }
    props.showAlert("Copied in the clipboard", "success")
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space has been removed", "success")
  }
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <h1>{props.hedding}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <div className="">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpace}
          >
            Clear Extra Space
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <h1>Your Text Summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0
            }).length
          }{" "}
          Words and {text.length} Character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  )
}
