<template>
  <div class="input-group mb-3">
    <select v-model="selectedAddressId" @change="emitSelectedAddressId" class="form-select" id="Address">
      <option selected value="0">Kõik aadressid</option>
      <option v-for="address in addresses" :key="address.addressId" :value="address.addressId">
        {{ address.addressName }}
      </option>
    </select>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'AddressesDropdown',
  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      selectedAddressId: '0',
      addresses:
          [
            {
              addressId: 0,
              addressName: ''
            }
          ]
    }
  },
  methods: {
    emitSelectedAddressId() {
        this.$emit('event-emit-selected-address-id', Number(this.selectedAddressId))
    },
    getAddresses() {
      this.$http.get("/address", {
        params: {
          userId: this.userId
        }
      })
          .then(response => {
            this.addresses = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
  },
  beforeMount() {
    this.getAddresses()
  }
}
</script>