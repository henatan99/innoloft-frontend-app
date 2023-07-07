import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapComponent = (props) => (
  <Map
    google={props.google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </Map>
);

const mapStyles = {
  width: '100%',
  height: '200px',
};

export default GoogleApiWrapper({
  apiKey: '',
})(MapComponent);