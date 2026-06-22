"use client";

import { useState } from "react";
import {
  Button,
  InputGroup,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { ImageIcon, User } from "lucide-react";
import { updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {};

    if (name.trim()) {
      payload.name = name.trim();
    }

    if (image.trim()) {
      payload.image = image.trim();
    }

    if (Object.keys(payload).length === 0) {
      toast.error("Please enter at least one field");
      return;
    }else{
        toast.success("data update successful ")
    }

    const { data, error } = await updateUser(payload);

    if (error) {
      console.log(error);
      return;
    }

    console.log("Updated:", data);

    window.location.reload();
  };

  return (
    <Modal>
      <Button color="primary" className="bg-primary/70 hover:opacity-85">
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-background">
            <Modal.CloseTrigger className="bg-background" />

            <Modal.Header>
              <Modal.Heading className="text-center font-bold text-2xl">
                Update Your Profile
              </Modal.Heading>
            </Modal.Header>

            <form onSubmit={handleSubmit}>
              <Modal.Body className="p-6">
                <Surface variant="default" className="bg-background">
                  <div className="flex flex-col gap-4">
                    <TextField>
                      <Label className="text-foreground font-medium mb-2">
                        Full Name
                      </Label>

                      <InputGroup className="bg-secondary border border-border rounded-2xl px-3">
                        <InputGroup.Prefix>
                          <User size={18} className="text-primary" />
                        </InputGroup.Prefix>

                        <InputGroup.Input
                          maxLength={13}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter Your Name"
                          className="placeholder:text-foreground/25"
                        />
                      </InputGroup>
                    </TextField>

                    <TextField>
                      <Label className="text-foreground font-medium mb-2">
                        Profile Image URL
                      </Label>

                      <InputGroup className="bg-secondary border border-border rounded-2xl px-3">
                        <InputGroup.Prefix>
                          <ImageIcon size={18} className="text-primary" />
                        </InputGroup.Prefix>

                        <InputGroup.Input
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          placeholder="https://example.com/profile.jpg"
                          className="placeholder:text-foreground/25"
                        />
                      </InputGroup>
                    </TextField>
                  </div>
                </Surface>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground font-bold rounded-2xl"
                >
                  Update
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
