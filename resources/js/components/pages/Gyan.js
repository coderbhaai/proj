import React, { Component } from 'react'
import Prism from 'prismjs'
import {Modal, ModalHeader, ModalBody } from 'reactstrap'
import CKEditor from 'ckeditor4-react'
import swal from 'sweetalert'

export class Gyan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gyan:                       [],
            quest:                      '',
            ans:                        '',
            selectedId:                 '',
            field:                      '',
            coding:                     [],
            all:                        [],
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
        }
        this.handleChange1 = this.handleChange1.bind( this )
        this.onEditorChange1 = this.onEditorChange1.bind( this )
    }
    onEditorChange1( evt1 ) { this.setState( { ans: evt1.editor.getData() } ) }
    handleChange1( changeEvent1 ) { this.setState( { ans: changeEvent1.target.value } ) }
    onChange= (e) => { this.setState({ [e.target.name]: e.target.value })}
    callSwal=(mesg)=>{ swal({ title: mesg, timer: 4000 }) }

    componentDidMount(){
        var id=this.props.match.params.id
        console.log('id', id)
        axios.get('/api/v1/fetchGyan/'+id)
        .then(res =>{
            this.setState({
                gyan:           res.data.gyan
            })
        })
        axios.get('/api/v1/fetchBasics')
        .then(res =>{
            console.log('res.data', res.data)
            this.setState({
                coding:             res.data.coding,
                all:                res.data.all,

            })
        })
        window.scrollTo(0, 0);
        Prism.highlightAll();
    }

    editModalOn = (i)=>{
        this.setState({
            editmodalIsOpen:            true,
            quest:                      i.quest,
            ans:                        i.ans,
            field:                      i.uid,
            selectedId:                 i.id
        })        
    }
    
    addModalOn = ()=>{
        this.setState({
            addmodalIsOpen:            true,
        })        
    }

    resetData = ()=>{
        this.setState({
            quest:                          '',
            ans:                            '',
            selectedId:                     '',
            editmodalIsOpen:                false,
            addmodalIsOpen:                 false
        })
    }

    addGyan = (e) => {
        e.preventDefault()
        const data={
            quest:                      this.state.quest,
            ans:                        this.state.ans,
            field:                      this.state.field
        }
        axios.post('/api/v1/addGyan', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){ this.setState({ gyan: [...this.state.gyan, res.data.data ] }) }
                this.callSwal(res.data.message) 
                this.resetData()
            })
    }

    updateGyan = (e) => {
        e.preventDefault()
        const data={
            quest:                      this.state.quest,
            ans:                        this.state.ans,
            field:                      this.state.field,
            id:                         this.state.selectedId
        }
        axios.post('/api/v1/updateGyan', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){
                    this.setState({ gyan: this.state.gyan.map(x => x.id === parseInt(res.data.data.id) ? x= res.data.data :x ) })
                }
                console.log('res.data', res.data)
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }
    
    render() {
        return (
            <>
                <div className="page-container gyan">
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <div className="inbox-mail row">
                                <div className="col-md-4 compose w3layouts">
                                    <h2>{this.props.match.params.id}</h2>
                                    <nav className="nav-sidebar">
                                        <ul className="nav tabs">
                                            { this.state.gyan.map((i, index)=>(
                                                <li key={index}><a href={"#id"+i.id} data-toggle="tab" aria-expanded="false">{i.quest}</a></li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <button className="amitBtn w-100" onClick={this.addModalOn}>Add Gyan</button>
                                </div>
                                <div className="col-md-8 tab-content tab-content-in w3">
                                    { this.state.gyan.map((i, index)=>(
                                        <div className="tab-pane text-style" id={"id"+i.id} key={index}>
                                            <div className="inbox-right">
                                                <div className="mailbox-content">
                                                    <section className="not-found-controller" dangerouslySetInnerHTML={{ __html: i.ans }}/>
                                                </div>
                                                <button className="amitBtn" onClick={()=>this.editModalOn(i)}>Edit this answer</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.editmodalIsOpen} className="adminModal"> 
                    <div className="flex-h">
                        <ModalHeader> Edit Gyan Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.updateGyan}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label>Question</label>
                                    <input className="form-control" type="text" name="quest" required value={this.state.quest} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Select Field</label>
                                    <select className="form-control" required value={this.state.field} onChange={this.onChange} name="field">
                                        <option value={this.state.field}>{this.state.field}</option>
                                        { this.state.all.map((i, index)=>( <option key={index} value={i.name}>{i.name}</option> ))}
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label>Answer</label>
                                        <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.ans} ans={this.state.ans} onChange={this.onEditorChange1} 
                                        config={ { extraAllowedContent: 'div(*)' } }
                                        />
                                </div>
                            </div>
                            <div className="my-btn">
                                <button className="amitBtn" type="submit">Submit</button>
                            </div>
                                <button className="btn btn-danger" onClick={this.resetData}>Close</button>

                        </form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.addmodalIsOpen} className="adminModal"> 
                    <div className="flex-h">
                        <ModalHeader> Add Gyan Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.addGyan}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label>Question</label>
                                    <input className="form-control" type="text" name="quest" required value={this.state.quest} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Select Field</label>
                                    <select className="form-control" required value={this.state.field} onChange={this.onChange} name="field">
                                        <option>Select Language</option>
                                        { this.state.all.map((i, index)=>( <option key={index} value={i.name}>{i.name}</option> ))}
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label>Answer</label>
                                        <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.ans} ans={this.state.ans} onChange={this.onEditorChange1} config={ { extraAllowedContent: 'div(*)' } }/>
                                </div>
                            </div>
                            <div className="my-btn">
                                <button className="amitBtn" type="submit">Submit</button>
                            </div>
                                <button className="btn btn-danger" onClick={this.resetData}>Close</button>

                        </form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Gyan