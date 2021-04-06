import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};


const CourseLocation = ({ course }) => {
  const [courseCenter, setCourseCenter] = useState({})

  //get the course coordinates
  useEffect(() => {
    if (course.location) {
      const coordinates = course.location?.split(',')
      setCourseCenter({
        lat: parseFloat(coordinates[0]),
        lng: parseFloat(coordinates[1])
      });
    }
  },[course])

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPKEY}>
      {courseCenter.lat && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={courseCenter}
          zoom={15}
          mapTypeId='satellite'
        >
          <Marker
            position={courseCenter}
          />
        </GoogleMap>
      )}
    </LoadScript>
  )
}

export default CourseLocation