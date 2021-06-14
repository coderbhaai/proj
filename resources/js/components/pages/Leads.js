import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody } from 'reactstrap'
import CKEditor from 'ckeditor4-react'
import swal from 'sweetalert'
import moment from "moment"

export class Leads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:                       '',
            phone:                      '',
            email:                      '',
            followUp:                   '',
            status:                     '',
            requirement:                '',
            source:                     '',
            leads:                      [],
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
            currentPage:                1,
            itemsPerPage:               100,
            search:                     ''
        }
        this.handleChange1 = this.handleChange1.bind( this )
        this.onEditorChange1 = this.onEditorChange1.bind( this )
    }
    onEditorChange1( evt1 ) { this.setState( { requirement: evt1.editor.getData() } ) }
    handleChange1( changeEvent1 ) { this.setState( { requirement: changeEvent1.target.value } ) }
    onChange= (e) => { this.setState({ [e.target.name]: e.target.value })}
    callSwal=(mesg)=>{ swal({ title: mesg, timer: 4000 }) }
    addModalOn = ()=>{ this.setState({ addmodalIsOpen: true }) }
    handleClick= (e)=> { this.setState({ currentPage: Number(e.target.id) }) }
    changeitemsPerPage = (e)=>{ this.setState({ itemsPerPage: e.target.value }) }
    searchSpace=(e)=>{ this.setState({search:e.target.value}) }

    componentDidMount(){
        axios.get('/api/v1/fetchLeads')
        .then(res =>{
            this.setState({
                leads:           res.data.leads
            })
        })
        window.scrollTo(0, 0)
    }

    editModalOn = (i)=>{
        this.setState({
            editmodalIsOpen:            true,
            name:                       i.name,
            phone:                      i.phone,
            email:                      i.email,
            followUp:                   i.followUp,
            status:                     i.status,
            requirement:                i.requirement,
            source:                     i.source,
            id:                         i.id
        })        
    }

    resetData = ()=>{
        this.setState({
            name:                       '',
            phone:                      '',
            email:                      '',
            followUp:                   '',
            status:                     '',
            requirement:                '',
            source:                     '',
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
        })
    }

    addLead = (e) => {
        e.preventDefault()
        const data={
            name:                       this.state.name,
            phone:                      this.state.phone,
            email:                      this.state.email,
            followUp:                   this.state.followUp,
            requirement:                this.state.requirement,
            source:                     this.state.source,
            status:                     this.state.status
        }
        axios.post('/api/v1/addLead', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){ this.setState({ leads: [...this.state.leads, res.data.data ] }) }
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }

    updateLead = (e) => {
        e.preventDefault()
        const data={
            name:                       this.state.name,
            phone:                      this.state.phone,
            email:                      this.state.email,
            followUp:                   this.state.followUp,
            requirement:                this.state.requirement,
            source:                     this.state.source,
            status:                     this.state.status,
            id:                         this.state.id
        }
        axios.post('/api/v1/updateLead', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){
                    this.setState({ leads: this.state.leads.map(x => x.id === parseInt(res.data.data.id) ? x= res.data.data :x ) })
                }
                console.log('res.data', res.data)
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }

    render() {
        const {currentPage, itemsPerPage } = this.state
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const renderItems =  this.state.leads.filter((i)=>{ if(this.state.search == null) return i; else if(i.name.toLowerCase().includes(this.state.search.toLowerCase()) || i.status.toLowerCase().includes(this.state.search.toLowerCase()) || i.source.toLowerCase().includes(this.state.search.toLowerCase()) ){ return i }}).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                        <p>{i.name}</p>
                        <p>{i.phone}</p>
                        <p>{i.email}</p>
                    </td>
                    <td>{i.source}</td>
                    <td><section className="not-found-controller" dangerouslySetInnerHTML={{ __html: i.requirement }}/></td>
                    <td>{i.followUp}</td>
                    <td>{i.status}</td>
                    <td>{moment(i.date).format("DD MMMM  YYYY")}</td>
                    <td><img src="/images/icons/edit.svg" style={{maxWidth: '20px'}} onClick={()=>this.editModalOn(i)}/></td>
                </tr>
        )})
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(this.state.leads.length / itemsPerPage); i++) { pageNumbers.push(i) }
        const renderPagination = pageNumbers.map(number => { return ( <li key={number} id={number} onClick={this.handleClick} > {number} </li> ) })
        return (
            <>
                <div className="page-container">
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <div className="inbox-mail row">
                                <div className="col-sm-12 tab-content tab-content-in w3">
                                    <h2 className="my-5 text-center">Leads</h2>
                                    <div className="btn-pag">                        
                                        <button className="amitBtn" onClick={this.addModalOn}>Add Leads</button>
                                        <div>
                                            <select className="form-control" required value={itemsPerPage} onChange={(e)=>this.changeitemsPerPage(e)}>
                                                <option>{itemsPerPage}</option>
                                                <option value="10">10</option> 
                                                <option value="25">25</option> 
                                                <option value="50">50</option> 
                                                <option value="100">100</option> 
                                            </select>
                                            <input type="text" placeholder="Search here" className="form-control" onChange={(e)=>this.searchSpace(e)} style={{width:'400px', marginRight:"1em"}}/>
                                            <div><ul className="page-numbers">{renderPagination}</ul></div>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead style={{background:'#fff'}}>
                                            <tr>
                                                <td>Sl</td>
                                                <td>Client</td>
                                                <td>Source</td>
                                                <td>Requirement</td>
                                                <td>Follow Up</td>
                                                <td>Status</td>
                                                <td>Date</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody>{renderItems}</tbody>
                                    </table>
                                    <ul className="page-numbers">{renderPagination}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.editmodalIsOpen} className="adminModal"> 
                <div className="flex-h">
                    <ModalHeader> Edit Leads Here </ModalHeader>
                    <div className="closeModal" onClick={this.resetData}>X</div>
                </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.updateLead}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>POC</label>
                                    <input className="form-control" type="text" name="name" required value={this.state.name} onChange={this.onChange} placeholder="Name of Client"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Phone</label>
                                    <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Phone Number"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Email</label>
                                    <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Source</label>
                                    <input className="form-control" type="text" name="source" value={this.state.source} onChange={this.onChange} placeholder="Source of Lead"/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Follow Up</label>
                                    <input className="form-control" type="date" name="followUp" value={this.state.followUp} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Status</label>
                                    <select className="form-control" required value={this.state.status} onChange={this.onChange} name="status">
                                        <option>Select Status</option>
                                        <option value="Open">Open</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Fake">Fake</option>
                                        <option value="Close">Close</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label>Requirement &amp; Action</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.requirement} requirement={this.state.requirement} onChange={this.onEditorChange1}/>
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
                        <ModalHeader> Add Leads Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.addLead}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>POC</label>
                                    <input className="form-control" type="text" name="name" required value={this.state.name} onChange={this.onChange} placeholder="Name of Client"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Phone</label>
                                    <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Phone Number"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Email</label>
                                    <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Source</label>
                                    <input className="form-control" type="text" name="source" value={this.state.source} onChange={this.onChange} placeholder="Source of Lead"/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Follow Up</label>
                                    <input className="form-control" type="date" name="followUp" value={this.state.followUp} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Status</label>
                                    <select className="form-control" required value={this.state.status} onChange={this.onChange} name="status">
                                        <option>Select Status</option>
                                        <option value="Open">Open</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Fake">Fake</option>
                                        <option value="Close">Close</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label>Requirement &amp; Action</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.requirement} requirement={this.state.requirement} onChange={this.onEditorChange1}/>
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

export default Leads