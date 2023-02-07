import { fireEvent, render, screen } from '@testing-library/react'
import { FormInput } from '../components'

describe('FormInput', () => {
  const renderComponent = (
    searchInputValue: string,
    handleOnChange: () => void
  ) => {
    const wrapper = render(
      <FormInput
        name={'testField'}
        label={'search'}
        placeholder={'Types a new search'}
        value={searchInputValue}
        onChange={handleOnChange}
      />
    )

    return wrapper
  }

  test('render formInput', () => {
    render(
      <FormInput
        name={'testField'}
        label={'search'}
        placeholder={'Types a new search'}
        value={'search text'}
        onChange={jest.fn()}
      />
    )
    const labelEl = screen.getByText(/search/i)
    const inputEl = screen.getByPlaceholderText(/Types a new search/i)
    expect(labelEl).toBeInTheDocument()
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveClass('form-input')
    expect(inputEl).toHaveValue('search text')
  })

  test('FormInput check on typing text', async () => {
    const mockHandleSearchInputValue = jest.fn()
    const { getByPlaceholderText } = renderComponent(
      'g',
      mockHandleSearchInputValue
    )
    const inputNode = getByPlaceholderText('Types a new search')
    expect(inputNode).toHaveValue('g')
    fireEvent.change(inputNode, { target: { value: 'su' } })
    expect(mockHandleSearchInputValue).toBeCalledTimes(1)
    expect(mockHandleSearchInputValue).toBeCalled()
  })
})
