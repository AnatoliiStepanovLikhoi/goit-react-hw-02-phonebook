import { PropTypes } from 'prop-types';
import { capitalizeFirstLetters } from '../../Utils/capitalizeFirstLetters';

import { Icon, ListItem, ContactText } from './ContactListItem.styled';

export function ContactListItem(props) {
  //   console.log(props.contactInfo.name);

  const {
    contactInfo: { name, number, id },
    onContactDelete,
  } = props;

  // const capitalName = `${name[0].toUpperCase()}${name.slice(1)}`;
  //   console.log(onContactDelete);

  const capitalName = capitalizeFirstLetters(name);

  return (
    <ListItem>
      <Icon />
      <ContactText>
        {capitalName}: {number}
      </ContactText>
      <button type="button" onClick={() => onContactDelete(id)}>
        Remove
      </button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),

  onContactDelete: PropTypes.func.isRequired,
};
