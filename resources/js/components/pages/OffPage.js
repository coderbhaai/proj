import React, { Component } from 'react'
import Prism from 'prismjs'
import {Modal, ModalHeader, ModalBody } from 'reactstrap'
import CKEditor from 'ckeditor4-react'
import swal from 'sweetalert'
// import moment from "moment"

export class Financials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client:                     '',
            url:                        '',
            keyword:                    '',
            date:                       '',
            type:                       '',
            amount:                     '',
            status:                     '',
            offPage:                    [],
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
            currentPage:                1,
            itemsPerPage:               20,
            search:                     ''
        }
        this.handleChange1 = this.handleChange1.bind( this )
        this.onEditorChange1 = this.onEditorChange1.bind( this )
    }
    onEditorChange1( evt1 ) { this.setState( { remarks: evt1.editor.getData() } ) }
    handleChange1( changeEvent1 ) { this.setState( { remarks: changeEvent1.target.value } ) }
    onChange= (e) => { this.setState({ [e.target.name]: e.target.value })}
    callSwal=(mesg)=>{ swal({ title: mesg, timer: 4000 }) }
    addModalOn = ()=>{ this.setState({ addmodalIsOpen: true }) }
    handleClick= (e)=> { this.setState({ currentPage: Number(e.target.id) }) }
    changeitemsPerPage = (e)=>{ this.setState({ itemsPerPage: e.target.value }) }
    searchSpace=(e)=>{ this.setState({search:e.target.value}) }

    componentDidMount(){
        axios.get('/api/v1/offPage')
        .then(res =>{
            this.setState({ offPage: res.data.offPage })
        })
        window.scrollTo(0, 0);
        Prism.highlightAll();
    }

    editModalOn = (i)=>{
        this.setState({
            editmodalIsOpen:            true,
            client:                     i.client,
            url:                        i.url,
            keyword:                    i.keyword,
            date:                       i.date,
            type:                       i.type,
            amount:                     i.amount,
            status:                     i.status,
            id:                         i.id
        })        
    }

    resetData = ()=>{
        this.setState({
            client:                     '',
            url:                        '',
            keyword:                    '',
            date:                       '',
            type:                       '',
            amount:                     '',
            editmodalIsOpen:            false,
            addmodalIsOpen:             false,
        })
    }

    // addPayment = (e) => {
    //     e.preventDefault()
    //     const data={
    //         business:                   this.state.business,
    //         date:                       this.state.date,
    //         type:                       this.state.type,
    //         fromTo:                     this.state.fromTo,
    //         mode:                       this.state.mode,
    //         purpose:                    this.state.purpose,
    //         amount:                     this.state.amount,
    //         number:                     this.state.number,
    //         remarks:                    this.state.remarks
    //     }
    //     axios.post('/api/v1/addPayment', data)
    //         .catch(err=>console.log('err', err))
    //         .then(res=>{
    //             if(res.data.success){ this.setState({ payments: [...this.state.payments, res.data.data ] }) }
    //             this.callSwal(res.data.message) 
    //         })
    //         this.resetData()
    // }

    updateOffPage = (e) => {
        e.preventDefault()
        const data={
            client:                     this.state.client,
            url:                        this.state.url,
            keyword:                    this.state.keyword,
            date:                       this.state.date,
            type:                       this.state.type,
            amount:                     this.state.amount,
            status:                     this.state.status,
            id:                         this.state.id
        }
        axios.post('/api/v1/updateOffPage', data)
            .catch(err=>console.log('err', err))
            .then(res=>{
                if(res.data.success){ this.setState({ offPage: this.state.offPage.map(x => x.id === parseInt(res.data.data.id) ? x= res.data.data :x ) }) }
                this.callSwal(res.data.message) 
            })
            this.resetData()
    }

    render() {
        const {currentPage, itemsPerPage } = this.state
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const renderItems =  this.state.offPage.filter((i)=>{ if(this.state.search == null) return i; else if(i.date.toLowerCase().includes(this.state.search.toLowerCase()) || i.url.toLowerCase().includes(this.state.search.toLowerCase()) || i.keyword.toLowerCase().includes(this.state.search.toLowerCase()) || i.client.toLowerCase().includes(this.state.search.toLowerCase()) ){ return i }}).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
            if(i.status !=0){
                return null
            }else{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{i.client}</td>
                        <td>{i.url}<br/>{i.keyword}</td>
                        <td>{i.date}</td>
                        <td>{i.type}- {i.amount}</td>
                        <td><img src="/images/icons/edit.svg" style={{maxWidth: '20px'}} onClick={()=>this.editModalOn(i)}/></td>
                    </tr>
                )
            }
        })
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(this.state.offPage.length / itemsPerPage); i++) { pageNumbers.push(i) }
        const renderPagination = pageNumbers.map(number => { return ( <li key={number} id={number} onClick={this.handleClick} > {number} </li> ) })
        return (
            <>
                <div className="page-container">
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <div className="inbox-mail row">
                                <div className="col-sm-12 tab-content tab-content-in w3">
                                    <h2 className="my-5 text-center">Financials</h2>
                                    <div className="btn-pag">                        
                                        {/* <button className="amitBtn" onClick={this.addModalOn}>Add Financials</button> */}
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
                                                <td>URL | Keyword</td>
                                                <td>Date</td>
                                                <td>Type | Amount</td>
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
                        <ModalHeader> Edit Off Page Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.updateOffPage}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Client</label>
                                    <input className="form-control" type="text" name="client" required value={this.state.client} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>URL</label>
                                    <input className="form-control" type="text" name="url" required value={this.state.url} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Keyword</label>
                                    <input className="form-control" type="text" name="keyword" required value={this.state.keyword} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Date</label>
                                    <input className="form-control" type="text" name="date" required value={this.state.date} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Type of off Page</label>
                                    <select className="form-control" required value={this.state.type} onChange={this.onChange} name="type">
                                        <option>Type of off Page</option>
                                        <option value="Bookmarking">Bookmarking</option>
                                        <option value="Classified">Classified</option>
                                        <option value="Article">Article</option>
                                        <option value="Forum">Forum</option>
                                        <option value="Image">Image</option>
                                        <option value="Listing">Listing</option>
                                    </select>
                                </div>
                                <div className="col-sm-3">
                                    <label>Amount</label>
                                    <input className="form-control" type="text" name="amount" required value={this.state.amount} onChange={this.onChange}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Status</label>
                                    <select className="form-control" required value={this.state.status} onChange={this.onChange} name="status">
                                        <option>Status</option>
                                        <option value="0">Pending</option>
                                        <option value="1">Done</option>
                                    </select>
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
                        <ModalHeader> Add Financials Here </ModalHeader>
                        <div className="closeModal" onClick={this.resetData}>X</div>
                    </div>
                    <ModalBody>
                        <form encType="multipart/form-data" onSubmit={this.addPayment}>
                            <div className="row">
                                <div className="col-sm-3">
                                    <label>Select Business</label>
                                    <select className="form-control" required value={this.state.business} onChange={this.onChange} name="business">
                                        <option>Select Business</option>
                                        <option value="AmitKK">AmitKK</option>
                                        <option value="Study Spectrum">StudySpectrum</option>
                                    </select>
                                </div>
                                <div className="col-sm-2">
                                    <label>Date</label>
                                    <input className="form-control" type="date" name="date" required value={this.state.date} onChange={this.onChange} placeholder="Date"/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Type of transaction</label>
                                    <select className="form-control" required value={this.state.type} onChange={this.onChange} name="type">
                                        <option>Type of transaction</option>
                                        <option value="Received">Received</option>
                                        <option value="Paid">Paid</option>
                                    </select>
                                </div>
                                <div className="col-sm-3">
                                    <label>Transaction with</label>
                                    <input className="form-control" type="text" name="fromTo" value={this.state.fromTo} onChange={this.onChange} placeholder="Transaction with"/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Purpose</label>
                                    <input className="form-control" type="text" name="purpose" value={this.state.purpose} onChange={this.onChange} placeholder="Purpose of payment"/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Payment Mode</label>
                                    <select className="form-control" required value={this.state.mode} onChange={this.onChange} name="mode">
                                        <option>Mode of Payment</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Cheque">Cheque</option>
                                        <option value="Online">Online</option>
                                        <option value="GooglePay">Google Pay</option>
                                        <option value="Paytm">Paytm</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <label>Amount</label>
                                    <input className="form-control" type="text" name="amount" value={this.state.amount} onChange={this.onChange} placeholder="Amount of transaction"/>
                                </div>
                                { this.state.mode == "Cheque" ?
                                    <div className="col-sm-4">
                                        <label>Cheque Details</label>
                                        <input className="form-control" type="text" name="number" value={this.state.number} onChange={this.onChange} placeholder="Cheque number with date"/>
                                    </div>
                                : this.state.mode == "Online" ?
                                    <div className="col-sm-4">
                                        <label>Transfer Details</label>
                                        <input className="form-control" type="text" name="number" value={this.state.number} onChange={this.onChange} placeholder="Transfer details with date"/>
                                    </div>
                                : null }
                                <div className="col-sm-12">
                                    <label>Remarks</label>
                                    <CKEditor onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) } data={this.state.remarks} remarks={this.state.remarks} onChange={this.onEditorChange1}/>
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

export default Financials