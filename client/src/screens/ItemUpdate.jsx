import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getItemById, updateItem } from '../services/items'
import ItemForm from '../components/shared/ItemForm'




class ItemUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                name: '',
                description: '',
                location: '',
                price: '',
                photos: '',


            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const item = await getItemById(this.props.match.params.id)
            this.setState({ item })
        }   catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const updatedField = {[event.target.name]: event.target.value }

        const editedItem = Object.assign(this.state.item, updatedField)

        this.setState ({ item: editedItem })
    }

    handleSubmit = event => {
        event.preventDefault()

        updateItem(this.props.match.params.id)
            .then(()=> this.setState({ updated: true }))
            .catch(consol.error)
    }


    render() {
        const { item, updated } = this.state
        const { handleChange, handleSubmit } = this

        if (updated) {
            return <Redirect to={`/items/${this.props.match.params.id}`} />
        }

        return (
            <>
                <ItemForm
                item={item}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cancelPath={`/items/${this.props.match.params.id}`}
            />
            </>
        )
    }
}