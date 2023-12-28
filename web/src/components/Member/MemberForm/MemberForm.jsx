import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import { useState } from 'react'

import { PickerInline } from 'filestack-react'

const MemberForm = (props) => {

  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data,{profileImg})
    props.onSave(data, props?.member?.id)
  }

  const [profileImg, setProfileImg] = useState(props?.member?.profileImg)

  const onFileUpload = (response) => {
    // console.log(response)
    setProfileImg(response.filesUploaded[0].url)
  }

  const apiKey = import.meta.env.REACT_APP_REDWOOD_ENV_FILESTACK_API_KEY;

  console.log(apiKey)

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.member?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.member?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="profileImg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile img
        </Label>


        <PickerInline apikey={apiKey} onSuccess={onFileUpload} />


        {/* <FileField
          name="profileImg"
          defaultValue={props.member?.profileImg}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="profileImg" className="rw-field-error" /> */}

        <Label
          name="age"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Age
        </Label>

        <NumberField
          name="age"
          defaultValue={props.member?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="age" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MemberForm
