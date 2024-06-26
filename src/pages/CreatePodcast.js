import React from "react";
import Header from "../components/common/Header";
import CreatePodcastForm from "../components/CreatePodcast/CreatePodcastForm";

function CreatePodcast() {
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>Create a podcast!</h1>
        <CreatePodcastForm />
      </div>
    </div>
  );
}

export default CreatePodcast;
