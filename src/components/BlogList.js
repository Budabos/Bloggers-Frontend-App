import { useState } from 'react';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';

import { BASE_URL } from '../utils';

// Component for creating a new blog post
export const BlogPostForm = ({ isOpen, onClose }) => {
  // Initial state for form data
  const initialData = {
    title: '',
    category: '',
    subCategory: '',
    content: '',
    authorName: '',
    authorAvatar: '',
    cover: '',
  };

  // State to manage form data and loading state
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleForm = (e) => {
    e.preventDefault();

    // Set loading state
    setIsLoading(true);

    // Prepare data for the API request
    const data = {
      ...formData,
    };

    // Make a POST request to create a new blog post
    fetch(`${BASE_URL}/blog-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          // Display success message
          toast.success(res.message, { duration: 5000 });
        } else {
          // Display error message
          toast.error(res.detail, { duration: 6000 });
        }

        // Reset loading state and close the modal
        setIsLoading(false);
        onClose();
      })
      .catch((err) => {
        console.error(err);
        // Display error message for unexpected errors
        toast.error('Error occurred. Try again later');
      });
  };

  // Render the component
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleForm}>
        <ModalHeader>Create a New Blog Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            {/* Form controls for different fields */}
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Input
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Subcategory</FormLabel>
              <Input
                name="subCategory"
                required
                value={formData.subCategory}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Content</FormLabel>
              <Input
                name="content"
                required
                value={formData.content}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Author Name</FormLabel>
              <Input
                name="authorName"
                required
                value={formData.authorName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Author Avatar</FormLabel>
              <Input
                name="authorAvatar"
                value={formData.authorAvatar}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Cover Image URL</FormLabel>
              <Input
                name="cover"
                required
                value={formData.cover}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          {/* Close button */}
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          {/* Submit button */}
          <Button
            type="submit"
            colorScheme="teal"
            isLoading={isLoading}
            loadingText="Creating Blog Post..."
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
