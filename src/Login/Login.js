import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <div class="auth-wrapper">
        <div class="auth-content">
            <div class="auth-bg">
                <span class="r"></span>
                <span class="r s"></span>
                <span class="r s"></span>
                <span class="r"></span>
            </div>
            <div class="card">
                <div class="card-body text-center">
                    <div class="mb-4">
                        <i class="feather icon-unlock auth-icon"></i>
                    </div>
                    <h3 class="mb-4">Login</h3>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="input-group mb-4">
                        <input type="password" class="form-control" placeholder="password"/>
                    </div>
                
                    <button class="btn btn-primary shadow-2 mb-4">Login</button>
              
                </div>
            </div>
        </div>
    </div>
    )
  }
}