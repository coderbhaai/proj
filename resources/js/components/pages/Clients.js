import React, { Component } from 'react'
import Prism from 'prismjs'
import {Modal, ModalHeader, ModalBody } from 'reactstrap'
import CKEditor from 'ckeditor4-react'
import swal from 'sweetalert'

export class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients:                    [],
            credentials:                [],
            accounts:                   [],
            services:                   [],
            active:                     true,
            id:                         '',
            name:                       '',
            web:                        '',
            status:                     '',
            contact:                    '',
            remarks:                    '',
            checkedSEO:                 false,
            checkedSMM:                 false,
            checkedGraphics:            false,
            checkedWeb:                 false,
            checkedInt:                 false,
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
        }
        this.handleChange1 = this.handleChange1.bind( this )
        this.handleChange2 = this.handleChange2.bind( this )
        this.onEditorChange1 = this.onEditorChange1.bind( this )
        this.onEditorChange2 = this.onEditorChange2.bind( this )
    }
    onEditorChange1( evt1 ) { this.setState( { contact: evt1.editor.getData() } ) }
    onEditorChange2( evt2 ) { this.setState( { remarks: evt2.editor.getData() } ) }
    handleChange1( changeEvent1 ) { this.setState( { contact: changeEvent1.target.value } ) }
    handleChange2( changeEvent2 ) { this.setState( { remarks: changeEvent2.target.value } ) }
    onChange= (e) => { this.setState({ [e.target.name]: e.target.value })}
    callSwal=(mesg)=>{ swal({ title: mesg, timer: 4000 }) }

    componentDidMount(){
        console.log('this.props.location', this.props.location)
        if(this.props.location.state){
            console.log("1")
            const id = this.props.location.state.active
            this.fetchData(id)
        }else{
            console.log("2")
            const id = true
            this.fetchData(id)
        }
        axios.get('/api/v1/fetchBasics')
        .then(res =>{
            this.setState({
                accounts:             res.data.accounts
            })
        })
        window.scrollTo(0, 0);
        Prism.highlightAll();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.location.state.active !== this.props.location.state.active){
            const id = nextProps.location.state.active
            this.fetchData(id)
        }
    }

    fetchData(id){
        axios.get('/api/v1/fetchClients/'+id)
        .then(res =>{
            console.log('res.data', res.data)
            this.setState({
                clients:           res.data.clients
            })
        })
        if(id===true){ this.setState({ active: 'Active' }) }else{ this.setState({ active: 'Not active' }) }
    }

    editModalOn = (i)=>{
        this.setState({
            editmodalIsOpen:            true,
            name:                       i.name,
            web:                        i.website,
            services:                   JSON.parse( i.services ),
            status:                     i.status,
            contact:                    i.contact,
            remarks:                    i.remarks,
            credentials:                JSON.parse( i.credential ),
            checkedSEO:                 JSON.parse( i.services )[0],
            checkedSMM:                 JSON.parse( i.services )[1],
            checkedGraphics:            JSON.parse( i.services )[2],
            checkedWeb:                 JSON.parse( i.services )[3],
            checkedInt:                 JSON.parse( i.services )[4],
            id:                         i.id
        })        
    }
    
    addModalOn = ()=>{
        this.setState({
            addmodalIsOpen:            true,
        })        
    }

    resetData = ()=>{
        this.setState({
            editmodalIsOpen:                false,
            addmodalIsOpen:                 false,
            checkedSEO:                     false,
            checkedSMM:                     false,
            checkedGraphics:                false,
            checkedWeb:                     false,
            checkedInt:                     false,
        })
    }

    handleCheckSEO = () => { this.setState({ checkedSEO: !this.state.checkedSEO }) }
    handleCheckSMM = () => { this.setState({ checkedSMM: !this.state.checkedSMM }) }
    handleCheckGraphics = () => { this.setState({ checkedGraphics: !this.state.checkedGraphics }) }
    handleCheckWeb = () => { this.setState({ checkedWeb: !this.state.checkedWeb }) }
    handleCheckInt = () => { this.setState({ checkedInt: !this.state.checkedInt }) }
    addCredentials=()=>{ this.setState({ credentials: [...this.state.credentials, ["", "", "", ""] ] }) }
    accountChange=(e, index)=>{ this.state.credentials[index][0] = e.target.value; this.setState({credentials: this.state.credentials}) }
    urlChange=(e,index)=>{ this.state.credentials[index][1] = e.target.value; this.setState({credentials: this.state.credentials}) }
    userChange=(e,index)=>{ this.state.credentials[index][2] = e.target.value; this.setState({credentials: this.state.credentials}) }
    passwordChange=(e, index)=>{ this.state.credentials[index][3] = e.target.value; this.setState({credentials: this.state.credentials}) }
    // handleActive=(e, index)=>{ this.state.credentials[index][4] = !this.state.credentials[index][4]; this.setState({credentials: this.state.credentials}) }
    removeCredentials=(index)=>{ this.state.credentials.splice(index, 1); this.setState({ credentials: this.state.credentials }) }

    addClient = (e) => {
        e.preventDefault()
        const data={
            name:                      this.state.name,
            website:                   this.state.web,
            status:                    this.state.status,
            services:                  JSON.stringify( [ this.state.checkedSEO, this.state.checkedSMM, this.state.checkedGraphics, this.state.checkedWeb, this.state.checkedInt ] ),
            credential:                JSON.stringify( this.state.credentials ),
            remarks:                    this.state.remarks,
            contact:                    this.state.contact,
        }
        axios.post('/api/v1/addClient', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){ this.setState({ clients: [...this.state.clients, res.data.data ] }) }
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }

    updateClient = (e) => {
        e.preventDefault()
        const data={
            name:                      this.state.name,
            website:                   this.state.web,
            status:                    this.state.status,
            services:                  JSON.stringify( [ this.state.checkedSEO, this.state.checkedSMM, this.state.checkedGraphics, this.state.checkedWeb, this.state.checkedInt ] ),
            credential:                JSON.stringify( this.state.credentials ),
            remarks:                   this.state.remarks,
            contact:                   this.state.contact,
            id:                        this.state.id
        }
        axios.post('/api/v1/updateClient', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){
                    this.setState({ clients: this.state.clients.map(x => x.id === parseInt(res.data.data.id) ? x= res.data.data :x ) })
                }
                console.log('res.data', res.data)
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }

    render() {
        return (
            <>
                <div className="page-container">
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <div className="inbox-mail row">
                                <div className="col-md-4 compose w3layouts">
                                    <h2>{this.state.active} Clients</h2>
                                    <nav className="nav-sidebar">
                                        <ul className="nav tabs">
                                            { this.state.clients.map((i, index)=>(
                                                <li key={index}><a href={"#id"+i.id} data-toggle="tab" aria-expanded="false">{i.name}</a></li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <button className="amitBtn w-100" onClick={this.addModalOn}>Add Client</button>
                                </div>
                                <div className="col-md-8 tab-content tab-content-in w3">
                                    { this.state.clients.map((i, index)=>(
                                        <div className="tab-pane text-style" id={"id"+i.id} key={index}>
                                            <div className="inbox-right">
                                                <div className="mailbox-content">
                                                    <h2>{i.name}</h2>
                                                    <p>Services: 
                                                        {JSON.parse( i.services)[0]? <span>SEO, </span> : null}
                                                        {JSON.parse( i.services)[1]? <span>SMM, </span> : null}
                                                        {JSON.parse( i.services)[2]? <span>Graphics, </span> : null}
                                                        {JSON.parse( i.services)[3]? <span>Website, </span> : null}
                                                        {JSON.parse( i.services)[4]? <span>International</span> : null}


                                                    </p>
                                                    <p>Website: {i.website}</p>
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Sl</td>
                                                                <td>Account</td>
                                                                <td>User</td>
                                                                <td>Password</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            { JSON.parse( i.credential).map((j, index2)=>(
                                                                <tr key={index2}>
                                                                    <td>{index2+1}</td>
                                                                    <td><a href={j[1]} target="_blank">{j[0]}</a></td>
                                                                    <td>{j[2]}</td>
                                                                    <td>{j[3]}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    {i.remarks ? <>Remarks: <section className="not-found-controller my-3" dangerouslySetInnerHTML={{ __html: i.remarks }}/></> : null }
                                                    {i.contact ? <>Contact:<section className="not-found-controller my-3" dangerouslySetInnerHTML={{ __html: i.contact }}/></> : null }
                                                </div>
                                                <button className="amitBtn" onClick={()=>this.editModalOn(i)}>Edit the client</button>
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
                    <ModalHeader> Edit client Here </ModalHeader>
                    <div className="closeModal" onClick={this.resetData}>X</div>
                </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.updateClient}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Name</label>
                                    <input className="form-control" type="text" name="name" required value={this.state.name} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Website</label>
                                    <input className="form-control" type="text" name="web" required value={this.state.web} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Status</label>
                                    <select className="form-control" required value={this.state.status} onChange={this.onChange} name="status">
                                        <option value="true">Active</option>
                                        <option value="false">Non Active</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label style={{display: "block"}}>Services</label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedSEO} onChange={this.handleCheckSEO}/> SEO </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedSMM} onChange={this.handleCheckSMM}/> SMM </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedGraphics} onChange={this.handleCheckGraphics}/> GRAPHICS </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedWeb} onChange={this.handleCheckWeb}/> WEBSITE </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedInt} onChange={this.handleCheckInt}/> International? </label>
                                </div>
                                <div className="col-sm-12">
                                    <button style={{display: "block"}} className="amitBtn mt-3" onClick={this.addCredentials}>Add credentials</button>
                                </div>
                                { this.state.clients.length ? 
                                    <>
                                    { this.state.credentials.map((i, index)=>(
                                        <div key={index} className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <label>Account</label>
                                                    <select className="form-control" required value={i[0]} onChange={(e)=>this.accountChange(e, index)} name="status">
                                                        <option>Select Account</option>
                                                        { this.state.accounts.map((i, index)=>(
                                                            <option key={index} value={i.name}>{i.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label>URL</label>
                                                    <input className="form-control" required value={i[1]} onChange={(e)=>this.urlChange(e, index)}/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label>Username</label>
                                                    <input className="form-control" required value={i[2]} onChange={(e)=>this.userChange(e, index)}/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label>Password</label>
                                                    <input className="form-control" required value={i[3]} onChange={(e)=>this.passwordChange(e, index)}/>
                                                </div>
                                                <div className="col-sm-1">
                                                    <label style={{display: "block"}}>Remove</label>
                                                        <div className="" onClick={()=>this.removeCredentials(index)}>X</div>
                                                    {/* <div className="flex-h">
                                                        <label className="m-0"><input type="checkbox" onChange={(e)=>this.handleActive(e,index)} defaultChecked={i[4]}/> Active </label>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </>
                                : null }
                                <div className="col-sm-6">
                                    <label>Contact</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.contact} contact={this.state.contact} onChange={this.onEditorChange1}/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Remarks</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.remarks} remarks={this.state.remarks} onChange={this.onEditorChange2}/>
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
                        <ModalHeader> Add Clients Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.addClient}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Name</label>
                                    <input className="form-control" type="text" name="name" required value={this.state.name} onChange={this.onChange} placeholder="Name of CLient"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Website</label>
                                    <input className="form-control" type="text" name="web" value={this.state.web} onChange={this.onChange} placeholder="Client website"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Status</label>
                                    <select className="form-control" required value={this.state.status} onChange={this.onChange} name="status">
                                        <option>Select Status</option>
                                        <option value="true">Active</option>
                                        <option value="false">Non Active</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label style={{display: "block"}}>Services</label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedSEO} onChange={this.handleCheckSEO}/> SEO </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedSMM} onChange={this.handleCheckSMM}/> SMM </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedGraphics} onChange={this.handleCheckGraphics}/> GRAPHICS </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedWeb} onChange={this.handleCheckWeb}/> WEBSITE </label>
                                    <label style={{paddingRight: "20px"}}><input type="checkbox" checked={this.state.checkedInt} onChange={this.handleCheckInt}/> International? </label>
                                </div>
                                <div className="col-sm-12">
                                    <button style={{display: "block"}} className="amitBtn mt-3" onClick={this.addCredentials}>Add credentials</button>
                                </div>
                                { this.state.credentials.length ? 
                                    <>
                                        { this.state.credentials.map((i, index)=>(
                                            <div key={index} className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <label>Account</label>
                                                        <select className="form-control" required value={i[0]} onChange={(e)=>this.accountChange(e, index)} name="status">
                                                            <option>Select Account</option>
                                                            { this.state.accounts.map((i, index)=>(
                                                                <option key={index} value={i.name}>{i.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label>URL</label>
                                                        <input className="form-control" required value={i[1]} onChange={(e)=>this.urlChange(e, index)}/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label>Username</label>
                                                        <input className="form-control" required value={i[2]} onChange={(e)=>this.userChange(e, index)}/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label>Password</label>
                                                        <input className="form-control" required value={i[3]} onChange={(e)=>this.passwordChange(e, index)}/>
                                                    </div>
                                                    <div className="col-sm-1">
                                                        <label style={{display: "block"}}>Remove</label>
                                                        <div className="" onClick={()=>this.removeCredentials(index)}>X</div>
                                                        {/* <div className="flex-h">
                                                            <label className="m-0"><input type="checkbox" onChange={(e)=>this.handleActive(e,index)}/> Active </label>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                : null }
                                <div className="col-sm-6">
                                    <label>Contact</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.contact} contact={this.state.contact} onChange={this.onEditorChange1}/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Remarks</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.remarks} ans={this.state.remarks} onChange={this.onEditorChange2}/>
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

export default Clients