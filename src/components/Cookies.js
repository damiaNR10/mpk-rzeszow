import React from 'react';

class Cookies extends React.Component {

    state = {
        isDisabled: true
    }

    setCookie = ( name = 'cookies', value = '1', expires = 3600, path = '/', domain = '', secure = '' ) => {
        this.setState({
            isDisabled: false,
        });
        const today = new Date();
        today.setTime( today.getTime() );
        if ( expires )
            expires = expires * 60 * 60 * 24;
        const expires_date = new Date( today.getTime() + (expires) );
        document.cookie = name + "=" +escape( value ) +
        ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
        ( ( path ) ? ";path=" + path : "" ) +
        ( ( domain ) ? ";domain=" + domain : "" ) +
        ( ( secure ) ? ";secure" : "" );
    }

    render() {
        return (
            <aside className={this.state.isDisabled ? 'cookies' : 'cookies cookies--disabled'}>
                <div className="container">
                    <p>Przetwarzamy dane osobowe w celu realizacji usług i zgodnie z <a href="/polityka-prywatnosci/">polityką prywatności</a>.</p>
                    <button onClick={this.setCookie} className="donotfade close">Zamknij</button>
                </div>
            </aside>
        );
    }
}

export default Cookies;