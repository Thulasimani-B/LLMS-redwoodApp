import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ReturnBookForm = (props) => {

  console.log(props.returnLendBook)

  const onSubmit = (data) => {
    props.onSave(data, props.returnLendBook.bookId)
  }

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
          name="DueDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Due date
        </Label>

        <DatetimeLocalField
          name="DueDate"
          defaultValue={formatDatetime(props.returnLendBook?.DueDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          disabled='true'
        />

        <FieldError name="DueDate" className="rw-field-error" />

        <Label
          name="lendAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lend at
        </Label>

        <DatetimeLocalField
          name="lendAt"
          defaultValue={formatDatetime(props.returnLendBook?.lendAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          disabled='true'
        />

        <FieldError name="lendAt" className="rw-field-error" />

        <Label
          name="returnAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Return at
        </Label>

        <DatetimeLocalField
          name="returnAt"
          defaultValue={formatDatetime(props.returnLendBook?.returnAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="returnAt" className="rw-field-error" />

        <Label
          name="memberId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Member id
        </Label>

        <NumberField
          name="memberId"
          defaultValue={props.returnLendBook?.memberId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          disabled='true'
        />

        <FieldError name="memberId" className="rw-field-error" />

        <Label
          name="bookId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Book id
        </Label>

        <NumberField
          name="bookId"
          defaultValue={props.returnLendBook?.bookId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          disabled='true'
        />

        <FieldError name="bookId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ReturnBookForm
